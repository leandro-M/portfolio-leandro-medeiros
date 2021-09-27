import React, { useState, useRef, useEffect } from 'react'

type TInformations = {
    width: number
    height: number
    left: number
    top: number
}

let transitionTimeout: any = 0

interface IPerspective {
    css?: any
}
const Perspective: React.FC<IPerspective> = ({css, children}) => {
    const element = useRef<HTMLDivElement>(null)

    const [style, setStyle] = useState(css ? {...css} : {})
    const [updateCall, setUpdateCall] = useState(0)
    const [reverse, setReverse] = useState(1)

    const [informations, setInformations] = useState<TInformations>({
        width: 0,
        height: 0,
        left: 0,
        top: 0,
    })

    const settings = {
        reverse: false,
        max: 30,
        perspective: 1000,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        scale: 1.02,
        speed: 2000,
        transition: true,
        axis: null,
        reset: true
    }

    useEffect(() => {
        setReverse(settings.reverse ? -1 : 1)

        return () => {
            clearTimeout(transitionTimeout)
            cancelAnimationFrame(updateCall)
        }
    }, [settings, updateCall])


    const handleMouseEnter = (e: React.MouseEvent) => {
        updateElementPosition()
        setTransition()
    }

    const reset = () => {
        window.requestAnimationFrame(() => {
            setStyle({
                ...style,
                transform: `perspective(${settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
            })
        })
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        e.persist()

        if (updateCall !== null) {
            window.cancelAnimationFrame(updateCall)
        }

        setUpdateCall(requestAnimationFrame(update.bind(element, e)))
    }

    const setTransition = () => {
        clearTimeout(transitionTimeout)

        setStyle({
            ...style,
            transition: `${settings.speed}ms ${settings.easing}`,
        })

        transitionTimeout = setTimeout(() => {
            setStyle({
                ...style,
                transition: '',
            })
        }, settings.speed || 1000)
    }

    const handleMouseLeave = () => {
        setTransition()

        if (settings.reset) {
            reset()
        }
    }

    const getValues = (e: React.MouseEvent) => {
        const x = (e.nativeEvent.clientX - informations?.left || 0) / informations?.width || 0
        const y = (e.nativeEvent.clientY - informations?.top || 0) / informations?.height || 0
        const _x = Math.min(Math.max(x, 0), 1)
        const _y = Math.min(Math.max(y, 0), 1)

        const tiltX = (reverse * (settings.max / 2 - _x * settings.max)).toFixed(2)
        const tiltY = (reverse * (_y * settings.max - settings.max / 2)).toFixed(2)

        const percentageX = _x * 100
        const percentageY = _y * 100

        return {
            tiltX,
            tiltY,
            percentageX,
            percentageY,
        }
    }

    const updateElementPosition = () => {
        const rect = element?.current?.getBoundingClientRect() as DOMRect
        const width = element?.current?.offsetWidth || 0
        const height = element?.current?.offsetHeight || 0
        const left = rect.left
        const top = rect.top

        setInformations({
            width,
            height,
            left,
            top
        })
    }

    const update = (e: React.MouseEvent) => {
        const values = getValues(e)

        setStyle({
            ...style,
            transform: `perspective(${settings.perspective}px) rotateX(${settings.axis === 'x' ? 0 : values.tiltY}deg) rotateY(${settings.axis === 'y' ? 0 : values.tiltX}deg) scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})`,
        })

        setUpdateCall(0)
    }

    return (
        <div
            ref={element}
            style={style}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    )
}

export default Perspective
