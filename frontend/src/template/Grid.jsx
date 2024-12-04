import React from "react"

const Grid = ({ sizes, children }) => {

    const toCssClasses = (sizes) => {

        const isColNumber = (val) => {
            const num = Number.parseInt(val);
            return !Number.isNaN(num) && num > 0 && num <= 12;
        }

        const values = sizes ? sizes.split(' ') : []
        const [ xsVal, smVal, mdVal, lgVal ] = values        

        let classes = ''
        if (xsVal) classes += isColNumber(xsVal) ? `col-xs-${xsVal} ` : ''
        if (smVal) classes += isColNumber(smVal) ? `col-sm-${smVal} ` : ''
        if (mdVal) classes += isColNumber(mdVal) ? `col-md-${mdVal} ` : ''
        if (lgVal) classes += isColNumber(lgVal) ? `col-lg-${lgVal} ` : ''

        return classes
    }

    return (
        <div className={toCssClasses(sizes || "12 12 12 12")}>
            {children}
        </div>
    )
}

export default Grid 
