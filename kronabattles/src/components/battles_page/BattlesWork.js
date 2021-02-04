import React from 'react'
import TapBattleWork from './TapBattleWork'

export default function BattlesWork() {
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //this array will use with data from server
    return (
        <TapBattleWork images={images} useravatar='images/avatar_icon.svg' 
        username="Бакланова София" redacts="3" 
        likes="45" score="7.6" />
    )
}