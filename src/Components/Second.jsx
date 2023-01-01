import React, { useState } from 'react'
import Table from './Table'
import { invoices } from "../../db.json"

const Second = () => {
    const [tax, setTax] = useState(null)
    const getTax = (value) => {
        setTax(value)
    }
    return (
        <div>
            <marquee className="blink" behavior="scroll">Calculate TAX by click the Button !</marquee>
            <Table data={invoices} getTax={getTax} />
            <div>
                <h1 className='amount'><span data-cy="show-tax">Calculated Tax Value :</span><span data-cy="tax-value">{tax == null ? "You are not selecting anything" : tax}</span></h1>
            </div>
        </div>
    )
}

export default Second