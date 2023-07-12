import React, {Component, FC, ReactElement, useEffect, useState} from "react";
import {Verse} from "./model/Verse";

interface DictionaryDisplayProps {
    verse: Verse
    currentWord: number
}

const DictionaryDisplay: FC<DictionaryDisplayProps> = ({verse, currentWord}: DictionaryDisplayProps): ReactElement => {
    // const isBDB = (entry) => {
    //     return RegExp(/^BDB.*?Dict/).test(entry['parent_lexicon']);
    // }

    const renderLexiconEntrySenses = (content) => {
        // const content = def['content']
        console.log(content)
        // let headword = ('headword' in def) ? 'HI' : '';
        var grammar = ('grammar' in content) ? '(' + content['grammar']['verbal_stem'] + ')' : "";
        var definition = ('definition' in content) ? (
            <span className="def" dangerouslySetInnerHTML={{__html: content['definition']}}></span>) : "";
        var alternative = ('alternative' in content) ? (
            <span className="alternative" dangerouslySetInnerHTML={{__html: content['alternative']}}></span>) : "";
        var notes = ('notes' in content) ? (
            <span className="notes" dangerouslySetInnerHTML={{__html: content['notes']}}></span>) : "";
        var sensesElems = ('senses' in content) ? content['senses'].map((sense, i) => {
            return <div key={i}>{renderLexiconEntrySenses(sense)}</div>;
        }) : "";
        let senses = sensesElems.length ? (<ol className="senses">{sensesElems}</ol>) : "";
        return (<div>
                {grammar}
                {definition}
                {alternative}
                {notes}
                {senses}
            </div>
        )
    }

    // let outerSenses = renderLexiconEntrySenses(entry['content']);
        // isBDB(entry) ?  renderBDBEntrySenses(entry['content'])
        // : renderLexiconEntrySenses(entry['content']);

    const renderHeadword = (def) => {
        return <b>{def['headword']}</b>
    }

    return <div>
        <div>
            {verse.words[currentWord].definition.map(def => {
                return (
                    <div>
                        {renderHeadword(def)}
                        {renderLexiconEntrySenses(def['content'])}
                    </div>
            )})
            }
            <br/>
            <a href={`https://www.pealim.com/search/?from-nav=1&q=${verse.words[currentWord].word}`} target="_blank">See grammatical conjugation info</a>

        </div>
        <br/>
    </div>
}

export default DictionaryDisplay;