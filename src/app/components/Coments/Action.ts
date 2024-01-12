"use client"
import { useCallback } from "react"


export const ActionAlert =  useCallback(()=> {
    console.log("Action Alert")
}, [])


export const ActionSucess = useCallback(()=> {
    console.log("Action Sucess")
}, [])

 export const ActionReq =  useCallback(()=> {
    console.log("Action Req")
}, [])
 