export class translator {
	static translate(phrase) {
		if(phrase != undefined){	
			let words=phrase.trim().split(" ");
			let ans="";
			for(let counter in words){
				let word=words[counter];
				if(this.is_vowel(word[0]) || (word.length>=2 && (word.substr(0,2)=="xr" || word.substr(0,2)=="yt"))){
					ans+= word+"ay ";
				}else{
					let i=0;
					while(i<word.length && !this.is_vowel(word[i]) && !(i>0 && word[i]=='y')){
						i++;
					}
					if(word[i]=='u' && (i+1)<word.length && this.is_vowel(word[i+1]))
						i++;
					ans += word.substring(i)+word.substring(0,i)+"ay ";
				}
			}
			return ans.trim();
		}
	}
	static is_vowel(char){
		switch(char){
			case 'a':
			case 'e':
			case 'i':
			case 'o':
			case 'u':
				return true;
		}
		return false;
	}
}
