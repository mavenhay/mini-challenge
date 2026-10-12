import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get(`bilangan/:angka`)
  getAngka(@Param(`angka`) a:string) {
    let an = parseInt(a,10);
    if (isNaN(an)||!Number.isInteger(an)) return "invalid type";
    return this.appService.getAngka(an);
  }
  @Get(`suhu/konversi`)
  getSuhu(@Query(`nilai`) an:number,@Query(`dari`) dari:string,@Query(`ke`) ke:string) {
    let isi = ["fahrenheit","celcius","kelvin"]
    if (isNaN(an)||!isi.includes(dari)||!isi.includes(ke)||dari==ke) return "invalid type";
    return this.appService.getSuhu(an,dari,ke);
  }
  @Get(`deret/:jenis`)
  getDeret(@Param(`jenis`) j:string, @Query(`jumlah`) jum:number) {
    let i = ["ganjil","genap","kuadrat"];
    if(!i.includes(j)||isNaN(jum)||jum<1||jum>20) return "invalid";
    return this.appService.getDeret(j,jum);
  }
}
