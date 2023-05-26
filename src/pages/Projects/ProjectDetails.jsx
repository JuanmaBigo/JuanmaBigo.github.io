import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProjectDetails() {
    const { name } = useParams()
    //sacar del store los datos del proyecto


    return (
        <div>{name}</div>
    )
}
