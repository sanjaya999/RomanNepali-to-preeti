import React, { useState, useEffect, useRef } from 'react';
import Use from './Use';

const App = () => {
  const [preetiInput, setPreetiInput] = useState('');

  const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };

 var multi_rules = {
 'sa': ['श','ष','स'] , 'ta': [ 'ट' , 'त'] , 

}

var pure = {
'c' : 'क्',
'k' : 'क्',
'kh' : 'ख्',
'g' : 'ग्',
'gh' : 'घ्',
'n' : 'ङ्',
'ch' : 'च्',
'chh' : 'छ्',
'j' : 'ज्',
'jh' : 'झ्',
'n' : 'ञ्',
't' : 'ट्',
'th' : 'ठ्',
'd' : 'ड्',
'dh' : 'ढ्',
'n' : 'ण्',
't' : 'त्',
'th' : 'थ्',
'd' : 'द्',
'dh' : 'ध्',
'n' : 'न्',
'p' : 'प्',
'f' : 'फ्',
'ph' : 'फ्',
'b' : 'ब्',
'bh' : 'भ्',
'm' : 'म्',
'y' : 'य्',
'r' : 'र्',
'l' : 'ल्',
'w' : 'व्',
's' : 'स्' , //'श्', // 'ष्', 'स्'],
'h' : 'ह्',
}




var charmap = {


'0':'०',
'1':'१',
'2':'२',
'3':'३',
'4':'४',
'5':'५',
'6':'६',
'7':'७',
'8':'८',
'9':'९',

'a' : 'अ',
'aa' : 'आ',
'ae' : 'ए',
'i' : 'इ',
'ii' : 'ई',
'u' : 'उ',
'uu' : 'ऊ',
'ri' : 'ऋ',
'e' : 'ए',
'ai' : 'ऐ',
'o' : 'ओ',
'au' : 'औ',
'ka' : 'क',
'kaa' : 'का',
'ko' : 'को',
'kau' : 'कौ',
'ki' : 'कि',
'ku' : 'कु',
'ki' : 'की',
'ku' : 'कू',
'ke' : 'के',
'kai' : 'कै',
'kum' : 'कं',

'kha' : 'ख',
'khaa' : 'खा',
'kho' : 'खो',
'khau' : 'खौ',
'khi' : 'खि',
'khi' : 'खी',
'khu' : 'खु',
'khu' : 'खू',
'khe' : 'खे',
'khai' : 'खै',
'khum' : 'खं',


'gaa' : 'गा',
'go' : 'गो',
'gau' : 'गौ',
'gi' : 'गि',
'gi' : 'गी',
'gu' : 'गु',
'gu' : 'गू',
'ge' : 'गे',
'gai' : 'गै',
'gum' : 'गं',
'ghaa' : 'घा',
'gho' : 'घो',
'ghau' : 'घौ',
'ghi' : 'घि',
'ghi' : 'घी',
'ghu' : 'घु',
'ghu' : 'घू',
'ghe' : 'घे',
'ghai' : 'घै',
'ghum' : 'घं',
'naa' : 'ङा',
'no' : 'ङो',
'nau' : 'ङौ',
'ni' : 'ङि',
'ni' : 'ङी',
'nu' : 'ङु',
'nu' : 'ङू',
'ne' : 'ङे',
'nai' : 'ङै',
'num' : 'ङं',
'chaa' : 'चा',
'cho' : 'चो',
'chau' : 'चौ',
'chi' : 'चि',
'chi' : 'ची',
'chu' : 'चु',
'chu' : 'चू',
'che' : 'चे',
'chai' : 'चै',
'chum' : 'चं',
'chhaa' : 'छा',
'chho' : 'छो',
'chhau' : 'छौ',
'chhi' : 'छि',
'chhi' : 'छी',
'chhu' : 'छु',
'chhu' : 'छू',
'chhe' : 'छे',
'chhai' : 'छै',
'chhum' : 'छं',
'jaa' : 'जा',
'jo' : 'जो',
'jau' : 'जौ',
'ji' : 'जि',
'ji' : 'जी',
'ju' : 'जु',
'ju' : 'जू',
'je' : 'जे',
'jai' : 'जै',
'jum' : 'जं',
'jhaa' : 'झा',
'jho' : 'झो',
'jhau' : 'झौ',
'jhi' : 'झि',
'jhi' : 'झी',
'jhu' : 'झु',
'jhu' : 'झू',
'jhe' : 'झे',
'jhai' : 'झै',
'jhum' : 'झं',
'naa' : 'ञा',
'no' : 'ञो',
'nau' : 'ञौ',
'ni' : 'ञि',
'ni' : 'ञी',
'nu' : 'ञु',
'nu' : 'ञू',
'ne' : 'ञे',
'nai' : 'ञै',
'num' : 'ञं',
'taa' : 'टा',
'to' : 'टो',
'tau' : 'टौ',
'ti' : 'टि',
'ti' : 'टी',
'tu' : 'टु',
'tu' : 'टू',
'te' : 'टे',
'tai' : 'टै',
'tum' : 'टं',
'thaa' : 'ठा',
'tho' : 'ठो',
'thau' : 'ठौ',
'thi' : 'ठि',
'thi' : 'ठी',
'thu' : 'ठु',
'thu' : 'ठू',
'the' : 'ठे',
'thai' : 'ठै',
'thum' : 'ठं',
'daa' : 'डा',
'do' : 'डो',
'dau' : 'डौ',
'di' : 'डि',
'di' : 'डी',
'du' : 'डु',
'du' : 'डू',
'de' : 'डे',
'dai' : 'डै',
'dum' : 'डं',
'dhaa' : 'ढा',
'dho' : 'ढो',
'dha' : 'ढौ',
'dhi' : 'ढि',
'dhi' : 'ढी',
'dhu' : 'ढु',
'dhu' : 'ढू',
'dhe' : 'ढे',
'dhai' : 'ढै',
'dhum' : 'ढं',
'taa' : 'ता',
'to' : 'तो',
'tau' : 'तौ',
'ti' : 'ति',
'ti' : 'ती',
'tu' : 'तु',
'tu' : 'तू',
'te' : 'ते',
'tai' : 'तै',
'tum' : 'तं',
'thaa' : 'था',
'tho' : 'थो',
'thau' : 'थौ',
'thi' : 'थि',
'thi' : 'थी',
'thu' : 'थु',
'thu' : 'थू',
'the' : 'थे',
'thai' : 'थै',
'thum' : 'थं',

'daa' : 'दा',
'do' : 'दो',
'dau' : 'दौ',
'di' : 'दि',
'di' : 'दी',
'du' : 'दु',
'du' : 'दू',
'de' : 'दे',
'dai' : 'दै',
'dum' : 'दं',
'dhaa' : 'धा',
'dho' : 'धो',
'dhau' : 'धौ',
'dhi' : 'धि',
'dhi' : 'धी',
'dhu' : 'धु',
'dhu' : 'धू',
'dhe' : 'धे',
'dhai' : 'धै',
'dhum' : 'धं',
'naa' : 'ना',
'no' : 'नो',
'nau' : 'नौ',
'ni' : 'नि',
'ni' : 'नी',
'nu' : 'नु',
'nu' : 'नू',
'ne' : 'ने',
'nai' : 'नै',
'num' : 'नं',
'paa' : 'पा',
'po' : 'पो',
'pau' : 'पौ',
'pi' : 'पि',
'pi' : 'पी',
'pu' : 'पु',
'pu' : 'पू',
'pe' : 'पे',
'pai' : 'पै',
'pum' : 'पं',
'phaa' : 'फा',
'pho' : 'फो',
'phau' : 'फौ',
'phi' : 'फि',
'phi' : 'फी',
'phu' : 'फु',
'phu' : 'फू',
'phe' : 'फे',
'phai' : 'फै',
'phum' : 'फं',
'baa' : 'बा',
'bo' : 'बो',
'bau' : 'बौ',
'bi' : 'बि',
'bi' : 'बी',
'bu' : 'बु',
'bu' : 'बू',
'be' : 'बे',
'bai' : 'बै',
'bum' : 'बं',
'bhaa' : 'भा',
'bho' : 'भो',
'bhau' : 'भौ',
'bhi' : 'भि',
'bhi' : 'भी',
'bhu' : 'भु',
'bhu' : 'भू',
'bhe' : 'भे',
'bhai' : 'भै',
'bhum' : 'भं',
'maa' : 'मा',
'mo' : 'मो',
'mau' : 'मौ',
'mi' : 'मि',
'mi' : 'मी',
'mu' : 'मु',
'mu' : 'मू',
'me' : 'मे',
'mai' : 'मै',
'mum' : 'मं',
'yaa' : 'या',
'yo' : 'यो',
'yau' : 'यौ',
'yi' : 'यि',
'yi' : 'यी',
'yu' : 'यु',
'yu' : 'यू',
'ye' : 'ये',
'yai' : 'यै',
'yum' : 'यं',
'raa' : 'रा',
'ro' : 'रो',
'rau' : 'रौ',
'ri' : 'रि',
'ri' : 'री',
'ru' : 'रु',
'ru' : 'रू',
're' : 'रे',
'rai' : 'रै',
'rum' : 'रं',
'laa' : 'ला',
'lo' : 'लो',
'lau' : 'लौ',
'li' : 'लि',
'li' : 'ली',
'lu' : 'लु',
'lu' : 'लू',
'le' : 'ले',
'lai' : 'लै',
'laai' : 'लाई',
'lum' : 'लं',
'waa' : 'वा',
'wo' : 'वो',
'wau' : 'वौ',
'wi' : 'वि',
'wi' : 'वी',
'wu' : 'वु',
'wu' : 'वू',
'we' : 'वे',
'wai' : 'वै',
'wum' : 'वं',
'saa' : 'शा',
'so' : 'शो',
'sau' : 'शौ',
'si' : 'शि',
'si' : 'शी',
'su' : 'शु',
'su' : 'शू',
'se' : 'शे',
'sai' : 'शै',
'sum' : 'शं',
'haa' : 'हा',
'ho' : 'हो',
'hau' : 'हौ',
'hi' : 'हि',
'hi' : 'ही',
'hu' : 'हु',
'hu' : 'हू',
'he' : 'हे',
'hai' : 'है',
'hum' : 'हं',


'ka' : 'क',
'kha' : 'ख',
'ga' : 'ग',
'gha' : 'घ',
'na' : 'ङ',
'cha' : 'च',
'chha' : 'छ',
'ja' : 'ज',
'jha' : 'झ',
'na' : 'ञ',
'ta' : 'ट',
'tha' : 'ठ',
'da' : 'ड',
'dha' : 'ढ',
'na' : 'ण',
'ta' : 'त',
'tha' : 'थ',
'da' : 'द',
'dha' : 'ध',
'na' : 'न',
'pa' : 'प',
'pha' : 'फ',
'ba' : 'ब',
'bha' : 'भ',
'ma' : 'म',
'ya' : 'य',
'ra' : 'र',
'la' : 'ल',
'wa' : 'व',
'sa' : 'श',
'ha' : 'ह',
'ksh': 'क्ष',
'tra': 'त्र',
'gya': 'ज्ञ',
'shra': 'श्र',
'gyaa': 'ज्ञा',

}

var vowels_begin = { // vowels at the beginning of word
'a' : 'अ',
'aa' : 'आ',
'i' : 'इ',
'ii' : 'ई',
'u' : 'उ',
'uu' : 'ऊ',
'ri' : 'ऋ',
'e' : 'ए',
'ai' : 'ऐ',
'o' : 'ओ',
'au' : 'औ',
}

var digits = {
'0':'०',
'1':'१',
'2':'२',
'3':'३',
'4':'४',
'5':'५',
'6':'६',
'7':'७',
'8':'८',
'9':'९', }


var vowels_middle = { // vowels at the middle of word or with consonant
'a' : 'ा',
'i' : 'ि',
'i' : 'ी',
'u' : 'ु',
'u' : 'ू',

'ri' : 'ृ',

'e' : 'े',
'ai' : 'ै',

'o' : 'ो',
'au' : 'ौ',

'n' : 'ँ',
'm' : 'ं',
'h' : 'ः',
}

  const get_vowelpos = (text) => {
    const decode_array = [];
    for (let w = 0; w < text.length; w++) {
      if (text[w] in vowels) {
        if (w - 1 === decode_array[decode_array.length - 1]) {
          decode_array.pop(); 
        }
        decode_array.push(w);
      }
    }
    return decode_array;
  };

 const decode = (text) => {
    if (!(text[text.length - 1] in vowels)) {
      text = text + 'a';
    }

    const vowel_pos = get_vowelpos(text);
    let output = '';
    let validpos = 0;

    for (let i = 0; i < vowel_pos.length; i++) {
      const letter = text.slice(validpos, vowel_pos[i] + 1);
      if (letter in charmap) {
        output += charmap[letter];
      } else {
        const half_letter = text[validpos];
        if (half_letter in pure) {
          output += pure[half_letter];
        } else if (letter in multi_rules) {
          output += multi_rules[letter][0]; // Pick the first option in the array for now
        }
        const nextletter = text.slice(validpos + 1, vowel_pos[i] + 1);
        if (nextletter in charmap) {
          output += charmap[nextletter];
        }
      }
      validpos = vowel_pos[i] + 1;
    }

    return output;
  };

  


 
    const handleInput = (event) => {
      setPreetiInput(event.target.value)
      const fulltext = event.target.value;
      const last_letter = fulltext[fulltext.length - 1];

      
    if (last_letter === " ") {
      const words = fulltext.trim().split(' ');

      let lastWord = words[words.length - 1];
      if (lastWord !== '') {
        const convertedWord = decode(lastWord);
        words[words.length - 1] = convertedWord;
        }  
      const convertedText = words.join(' ') + ' ';

        setPreetiInput( convertedText );
        

    }
    else{
      setPreetiInput(fulltext)
    }
    };

   
 

  return (
    <div className="wrapper" style={{ width: 300 }}>
      <div>
        <label>Traditional Roman Typing</label>
        <textarea
          className="input-preeti"
          cols="50"
          rows="10"
          value={preetiInput}
          onChange={handleInput}
          
        />
      </div>

        <Use />
      </div>

    

   
  );
};

export default App;