import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: '../app.component.css'
})
export class FormComponent implements AfterViewInit {
  ngAfterViewInit() {
    const discountSelect = document.getElementById('discount') as HTMLSelectElement;
    const discountTags = document.querySelectorAll('.discount-tag');

    discountSelect.addEventListener('change', function() {
      const discountValue = discountSelect.value;
      console.log(discountValue)
      discountTags.forEach(tag => {
        (tag as HTMLElement).style.display = 'none';
      });
      const selectedTag = document.getElementById('tag-' + discountValue) as HTMLElement;
      console.log(selectedTag)
      if (selectedTag) {
        selectedTag.style.display = 'inline-block'; // 显示选中的折扣标签
      }
    });

    // 页面加载时触发 change 事件以设置初始状态
    discountSelect.dispatchEvent(new Event('change'));
  }
}
