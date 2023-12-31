import * as React from 'react';
import {ThemeDiv} from '../theme-div/theme-div';

import './tooltip.scss';

export const useHover = (): [React.MutableRefObject<any>, boolean] => {
    const [show, setShow] = React.useState(false);
    const ref = React.useRef(null);

    const handleMouseOver = () => setShow(true);
    const handleMouseOut = () => setShow(false);

    React.useEffect(() => {
        const cur = ref.current;

        if (cur) {
            cur.addEventListener('mouseover', handleMouseOver);
            cur.addEventListener('mouseout', handleMouseOut);

            return () => {
                cur.removeEventListener('mouseover', handleMouseOver);
                cur.removeEventListener('mouseout', handleMouseOut);
            };
        }
    }, []);

    return [ref, show];
};

/**
 * Displays a Tooltip when its children are hovered over
 */
export const Tooltip = (props: {content: React.ReactNode | string; inverted?: boolean} & React.PropsWithRef<any>) => {
    const [tooltip, showTooltip] = useHover();
    return (
        <div ref={tooltip} style={{position: 'relative', minWidth: 0}}>
            <ThemeDiv hidden={!showTooltip} className={`tooltip ${props.inverted ? 'tooltip--inverted' : ''}`}>
                {props.content}
            </ThemeDiv>
            <div>{props.children}</div>
        </div>
    );
};
