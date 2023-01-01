import { Route, Routes } from "react-router-dom"
import React from 'react'
import Body from "../Components/Body"
import Second from "../Components/Second"

const AllRouter = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <marquee className="blink" behavior="scroll">Calculate your TAX file in one click!</marquee>
                    <Body />
                </>
            }></Route>
            <Route path="/second" element={
                <Second />
            }></Route>
        </Routes>
    )
}

export default AllRouter