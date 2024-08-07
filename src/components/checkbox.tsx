import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { DefaultSvg, Step1, Step2, Step3, HoverSvg, CheckedHoverSvg } from './svg-icons';

enum AnimationSteps {
    First = 1,
    Last = 3
}

export const CheckboxWithSVG = ({ hovered, checked }: {
    hovered: boolean;
    checked: boolean;
}) => {
    const [animationStep, setAnimationStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [lastCheckedState, setLastCheckedState] = useState(checked);

    // Handle changes in the checked state to start or reverse the animation
    useEffect(() => {
        if (checked !== lastCheckedState) {
            setIsAnimating(true); 
            setAnimationStep(checked ? AnimationSteps.First : AnimationSteps.Last);
            setLastCheckedState(checked);
        }
    }, [checked, lastCheckedState]);

    // Control the animation frame transitions
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAnimating) {
            interval = setInterval(() => {
                setAnimationStep(prev => {
                    if (checked && prev < 3) {
                        return prev + 1;
                    } else if (!checked && prev > 1) {
                        return prev - 1;
                    } else {
                        setIsAnimating(false);
                        return 0;
                    }
                });
            }, 100); // frame rate
        }
        return () => clearInterval(interval);
    }, [animationStep, checked, isAnimating]);

    // Get the correct SVG based on the state
    const getCurrentSvg = () => {
        if (isAnimating) {
            return [Step1, Step2, Step3, Step2, Step1][animationStep - 1];
        }
        if (hovered && checked && !isAnimating) {
            return CheckedHoverSvg;
        }
        if (hovered) {
            return HoverSvg;
        }
        if (checked && !isAnimating) {
            return Step3;
        }
        return DefaultSvg;
    };

    return (
        <Image src={getCurrentSvg()} alt="Custom SVG Checkbox" width={25} height={25} />
    );
};
