import React from "react";
import { useMachine } from "@xstate/react";
import bookingMachine from "../Machines/bookingMachine";
import {Nav} from '../Components/Nav'
import { StepsLayout } from "./StepsLayout";
import './BaseLayout.css'

const BaseLayout = () => {
    const [state, send] = useMachine(bookingMachine);

    console.log('nuestra maquina', state.value, state.context)
    return(
        <div className="BaseLayout">
            <Nav send={send} state = {state}/>
            <StepsLayout state={state} send={send}/>
        </div>
    )
}

export default BaseLayout;