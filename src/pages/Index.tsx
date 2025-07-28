import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [gasVolume, setGasVolume] = useState(50);
  const [deliveryDistance, setDeliveryDistance] = useState(20);
  const [totalCost, setTotalCost] = useState(0);

  const calculateCost = () => {
    const gasCost = gasVolume * 45; // 45 руб за литр
    const deliveryCost = deliveryDistance <= 30 ? 0 : (deliveryDistance - 30) * 15;
    setTotalCost(gasCost + deliveryCost);
  };

  React.useEffect(() => {
    calculateCost();
  }, [gasVolume, deliveryDistance]);

  return (
    <div className="min-h-screen bg-white">
      {/* Навигация */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Fuel" className="text-primary" size={28} />
            <span className="text-xl font-bold text-foreground">ГазДоставка</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О компании</a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#calculator" className="text-muted-foreground hover:text-primary transition-colors">Калькулятор</a>
            <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать
          </Button>
        </div>
      </nav>

      {/* Главный блок */}
      <section className="bg-gradient-to-br from-primary/5 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Доставка пропана в Москве и МО
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Профессиональная заправка газовых баллонов и газгольдеров. 
                Быстро, безопасно, с гарантией качества.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать доставку
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/125c3eec-8be7-45ff-a0e2-cc45bacd5eee.jpg" 
                alt="Доставка газа"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* О компании */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">О компании</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Более 10 лет обеспечиваем надежную доставку пропана для частных клиентов и предприятий
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Award" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle>Лицензированная деятельность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Все необходимые разрешения и сертификаты для работы с газовым оборудованием
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="Clock" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle>Работаем 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Круглосуточная служба доставки и экстренного обслуживания
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="Shield" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle>Безопасность превыше всего</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Строгое соблюдение норм безопасности при транспортировке и заправке
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Где может понадобиться заправка газа */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Где может понадобиться заправка газа
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Home" size={40} className="mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">Частные дома</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Отопление, горячая вода, газовые плиты
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Building" size={40} className="mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">Предприятия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Производственные процессы, котельные
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Car" size={40} className="mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">Автотранспорт</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Автомобили на газовом топливе
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Tent" size={40} className="mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">Дачи и кемпинги</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Временное газоснабжение, барбекю
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Преимущества работы с нами
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <Icon name="CheckCircle" size={24} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Быстрая доставка</h3>
                <p className="text-muted-foreground">Доставка в течение 2-4 часов по Москве и МО</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Icon name="CheckCircle" size={24} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Качественный газ</h3>
                <p className="text-muted-foreground">Пропан высшего сорта от проверенных поставщиков</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Icon name="CheckCircle" size={24} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Справедливые цены</h3>
                <p className="text-muted-foreground">Конкурентные тарифы без скрытых доплат</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Icon name="CheckCircle" size={24} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Опытные специалисты</h3>
                <p className="text-muted-foreground">Команда сертифицированных мастеров</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Icon name="CheckCircle" size={24} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Гарантия безопасности</h3>
                <p className="text-muted-foreground">Страхование и соблюдение всех норм</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Icon name="CheckCircle" size={24} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Техподдержка</h3>
                <p className="text-muted-foreground">Консультации и помощь 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Battery" size={32} className="text-primary mb-2" />
                <CardTitle>Заправка стальных и композитных баллонов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Заправка баллонов любого объема с выездом к клиенту. 
                  Проверка состояния баллонов перед заправкой.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Баллоны от 5 до 50 литров</li>
                  <li>• Проверка технического состояния</li>
                  <li>• Замена неисправных баллонов</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Container" size={32} className="text-primary mb-2" />
                <CardTitle>Заправка газгольдеров любых объемов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Заправка подземных и наземных газгольдеров. 
                  Контроль уровня и давления газа.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• От 500 до 10000 литров</li>
                  <li>• Диагностика системы</li>
                  <li>• Профилактическое обслуживание</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Settings" size={32} className="text-primary mb-2" />
                <CardTitle>Установка наземных газгольдеров</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Полный цикл установки наземных газгольдеров с подключением 
                  к газовой системе дома.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Выбор оптимального места</li>
                  <li>• Монтаж и подключение</li>
                  <li>• Пусконаладочные работы</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="ArrowUpCircle" size={32} className="text-primary mb-2" />
                <CardTitle>Откачка газа из газгольдера</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Безопасная откачка газа при ремонте, замене или 
                  демонтаже газгольдера.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Полная откачка остатков</li>
                  <li>• Подготовка к ремонту</li>
                  <li>• Соблюдение норм безопасности</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Калькулятор */}
      <section id="calculator" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Калькулятор расчета стоимости
            </h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Рассчитайте стоимость доставки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="gas-volume">Объем газа (литры)</Label>
                  <Input
                    id="gas-volume"
                    type="number"
                    value={gasVolume}
                    onChange={(e) => setGasVolume(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="delivery-distance">Расстояние доставки (км)</Label>
                  <Input
                    id="delivery-distance"
                    type="number"
                    value={deliveryDistance}
                    onChange={(e) => setDeliveryDistance(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                    <span>Стоимость газа ({gasVolume} л × 45 ₽):</span>
                    <span>{gasVolume * 45} ₽</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                    <span>Доставка {deliveryDistance <= 30 ? '(бесплатно до 30 км)' : `(${deliveryDistance - 30} км × 15 ₽)`}:</span>
                    <span>{deliveryDistance <= 30 ? 0 : (deliveryDistance - 30) * 15} ₽</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between items-center font-semibold text-lg">
                      <span>Итого:</span>
                      <span className="text-primary">{totalCost} ₽</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать по этой цене
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Вопрос-ответ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Часто задаваемые вопросы
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Как быстро вы доставляете газ?</AccordionTrigger>
                <AccordionContent>
                  Обычно доставка занимает 2-4 часа с момента оформления заказа. 
                  В срочных случаях можем доставить в течение часа за дополнительную плату.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Какой минимальный объем заказа?</AccordionTrigger>
                <AccordionContent>
                  Минимальный объем заказа составляет 20 литров. 
                  Для меньших объемов действует минимальная стоимость заказа.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Работаете ли вы в выходные?</AccordionTrigger>
                <AccordionContent>
                  Да, мы работаем 7 дней в неделю, включая праздники. 
                  В выходные дни действует небольшая доплата за доставку.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Нужно ли готовить документы для заправки?</AccordionTrigger>
                <AccordionContent>
                  Для частных клиентов никаких документов не требуется. 
                  Для юридических лиц необходимы документы организации.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Что делать, если баллон неисправен?</AccordionTrigger>
                <AccordionContent>
                  Мы проводим диагностику всех баллонов перед заправкой. 
                  Неисправные баллоны заменяем на исправные или ремонтируем при возможности.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <div>
                    <div className="font-semibold">+7 (495) 123-45-67</div>
                    <div className="text-sm text-muted-foreground">Круглосуточно</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <div>
                    <div className="font-semibold">info@gazdelivery.ru</div>
                    <div className="text-sm text-muted-foreground">Ответим в течение часа</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <div>
                    <div className="font-semibold">Москва и Московская область</div>
                    <div className="text-sm text-muted-foreground">Зона обслуживания</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <div>
                    <div className="font-semibold">24/7</div>
                    <div className="text-sm text-muted-foreground">Без выходных и праздников</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Заказать обратный звонок</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="phone">Ваш телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение (необязательно)</Label>
                  <Input id="message" placeholder="Опишите ваш запрос" className="mt-1" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="PhoneCall" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Fuel" className="text-primary" size={24} />
                <span className="text-lg font-bold">ГазДоставка</span>
              </div>
              <p className="text-gray-400 text-sm">
                Надежная доставка пропана в Москве и Московской области
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Заправка баллонов</li>
                <li>Заправка газгольдеров</li>
                <li>Установка оборудования</li>
                <li>Откачка газа</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Лицензии</li>
                <li>Безопасность</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@gazdelivery.ru</li>
                <li>Москва и МО</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ГазДоставка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;