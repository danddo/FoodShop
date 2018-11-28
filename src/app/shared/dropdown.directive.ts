import { Directive, ElementRef, HostListener,OnInit, HostBinding } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirective{
    @HostBinding('class.open') isOpen  = false;

    @HostListener('click') openWindow(){
        this.isOpen = !this.isOpen;
    }
}