
"use client"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

import House from './components/House.tsx'

export default function AppRoutes() {
    return (
        <>
	    <div>
	        <BrowserRouter>
		    <Routes>
		        <Route path='/' element={<House />} />
		    </Routes>
		</BrowserRouter>
	    </div>
	</>
    );
}