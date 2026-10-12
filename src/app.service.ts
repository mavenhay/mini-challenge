import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getAngka(a:number) {
    if (a<1||a>100) throw new Error(`Angka bukan bilangan bulat 1-100`);
    return {
      angka:a,
      jenis:a%2==0?"genap":"ganjil",
      kuadrat:a**2,
      kelipatanLima:a%5==0
    }
  }
  getSuhu(a:number,awal:string, akhir:string) {
    let hasil = 0;
    if (awal=="fahrenheit"&&akhir=="celcius"){
      hasil = (a-32)*5/9;
    } else if (awal=="celcius"&&akhir=="fahrenheit"){
      hasil=a*9/5+32;
    } else if (awal=="kelvin"&&akhir=="fahrenheit"){
      hasil = a-273.15;
      hasil = a*9/5+32;
    } else if (awal=="fahrenheit"&&akhir=="kelvin"){
      hasil = a-273.15;
      hasil = (a-32)*5/9;
    } else if (awal=="celcius"&&akhir=="kelvin"){
      hasil = a+273.15
    } else if (awal=="kelvin"&&akhir=="celcius"){
      hasil = a-273.15
    }
    return {
      nilaiAsal:a,
      satuanAsal:awal,
      hasil: hasil,
      satuanHasil: akhir
    }
  }
  getDeret(j:string,jum:number){
    let d:number[] = [];
    for (let i=1;i<=jum;i++){
      if((j=="genap"&&i%2!=0)||(j=="ganjil"&&i%2==0)) continue;
      if (j=="kuadrat")d.push(i*i);
      else d.push(i);
    }
    return {
      jenis:j,
      jumlah:jum,
      data: d,
      total: d.reduce((t,n)=>t+n,0)
    }
  }
}
