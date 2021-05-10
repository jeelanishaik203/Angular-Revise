import {Pipe, PipeTransform} from '@angular/core';
    
@Pipe({
    name: 'titleCase',
  })
export class titleCasePipe implements PipeTransform
{
    transform(value:string,args:any[])
    {
        var prepositions=["of","the"];
        if(!value)
            return null;
        else
        {
            let words=value.split(' ');
            for(let i=0;i<words.length;i++)            
            {
                if(prepositions.includes(words[i]))
                {
                    words[i] = words[i].toLowerCase();
                }
                else
                {
                    words[i] = words[i].substr(0,1).toUpperCase()+words[i].substr(1,words[i].length-1).toLowerCase();
                }
                console.log(words[i]);
                words[i]+=" ";
            }
            return words.join(" ");
        }

    }
}