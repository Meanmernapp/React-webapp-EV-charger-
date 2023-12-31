import {Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import SideBarMap from '../../components/SideBarMap'
import { useSelector } from 'react-redux'
import EvChargerModal from './component/EvChargerModal'
import './mapview.scss'
import MapView from './MapView'

const MapViewLayout = () => {
    const { getHeaderHeight } = useSelector(state => state.SharedSlice)
    const mapViewHeight = `calc(100vh - ${getHeaderHeight}px)`;
    
    const isSmallerScreen = useMediaQuery((theme => theme.breakpoints.down('sm')))
    return (
        <Stack direction="row" >
            {/* sidebar */}
            <Stack
                width="310px"
                height={mapViewHeight}
                sx={{ backgroundColor: (theme => theme.palette.background.default), display: isSmallerScreen ? "none" : 'flex' }}
            >
                <SideBarMap />
            </Stack>
            {/* map view */}
            <Stack width="100%" height={mapViewHeight} >
                <MapView />
                {/* <EvChargerModal/> */}
            </Stack>
        </Stack>
    )
}

export default MapViewLayout