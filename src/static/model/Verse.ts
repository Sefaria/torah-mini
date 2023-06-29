class Word {
    word: string;
    verse: string;
    verse_index: number;

    constructor(word: string, verse: string, index: number) {
        this.word = word;
        this.verse = verse;
        this.verse_index = index;
    }
}

class Verse {
    verse: string;
    words: Word[]

    constructor(verse: string) {
        this.verse = verse
        this.words = this.verse.split(/[\s]/).map((word, index) => new Word(word, verse, index));
    }
}

export {Verse, Word}