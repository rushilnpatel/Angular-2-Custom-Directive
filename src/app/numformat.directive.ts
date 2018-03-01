import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appNumformat]'
})
export class NumformatDirective {



  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur(){
    let value: string = this.el.nativeElement.value;
    
      let myvalue=this.el.nativeElement.value;
      let areacode = myvalue.slice(0,3);
      let mid =myvalue.slice(3,6);
      let last =myvalue.slice(6,10);
      // console.log(areacode);
      // console.log(mid);
      // console.log(last);
      let newvalue='('+areacode+') '+mid+'-'+last;
      this.el.nativeElement.value =newvalue; 
    
  }

}
