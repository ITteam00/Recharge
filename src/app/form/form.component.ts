import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StartRechargeButtonComponent } from '../start-recharge-button/start-recharge-button.component';



@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,StartRechargeButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: '../app.component.css'
})
export class FormComponent implements AfterViewInit {
  rechargeAmount: number = 100;  // 默认值
  paymentAmount: number = 99.50; // 示例值，根据折扣计算

  constructor(private router: Router) {}


  ngAfterViewInit() {
    const discountSelect = document.getElementById('discount') as HTMLSelectElement;
    const discountTags = document.querySelectorAll('.discount-tag');

    discountSelect.addEventListener('change', function() {
      const discountValue = discountSelect.value;
      discountTags.forEach(tag => {
        (tag as HTMLElement).style.display = 'none';
      });
      const selectedTag = document.getElementById('tag-' + discountValue) as HTMLElement;
      if (selectedTag) {
        selectedTag.style.display = 'inline-block'; // 显示选中的折扣标签
      }
    });

    // 页面加载时触发 change 事件以设置初始状态
    discountSelect.dispatchEvent(new Event('change'));
  }

  setAmount(amount: number) {
    this.rechargeAmount = amount;
    this.updatePaymentAmount();
  }

  setCustomAmount(event: Event) {
    const input = event.target as HTMLInputElement;
    this.rechargeAmount = parseFloat(input.value) || 0;
    this.updatePaymentAmount();
  }

  updatePaymentAmount(discountValue?: string) {
    const discount = discountValue ? parseFloat(discountValue) : parseFloat((document.getElementById('discount') as HTMLSelectElement).value);
    this.paymentAmount = this.rechargeAmount * (1 - discount / 100);
  }

  startRecharge() {
    console.log("route!~")
    // 这里可以添加任何需要的逻辑，例如验证或处理数据
    this.router.navigate(['/confirm-pay'], {
      queryParams: {
        paymentAmount: this.paymentAmount,
        rechargeAmount: this.rechargeAmount
      }
    });
  }
}
