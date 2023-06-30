import React, {Component, ReactElement, useEffect, useState} from "react";
import {Verse} from "./model/Verse";

interface DictionaryDisplayProps {
    verse: Verse
    currentWord: number
}

const DictionaryDisplay: FC<DictionaryDisplayProps> = ({verse, currentWord}: DictionaryDisplayProps): ReactElement => {
    return <div>
        <br/>
        <br/>
        <b>Definition:</b>
        <div>
            {verse.words[currentWord].definition}
        </div>
        <br/>
    </div>;
}

export default DictionaryDisplay;