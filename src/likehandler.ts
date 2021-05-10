export class likeHandler
{
  
  constructor(public likecount?: number, public likeState?:boolean){ console.log("hi");};
  
  likeEvent = ()=>
  {
    console.log("hi");
    if(this.likeState != false)
    {
      this.likecount -= 1;
      this.likeState = false;
    }
    else
    {
      this.likecount += 1;
      this.likeState = true
    }
    
    
  }
}