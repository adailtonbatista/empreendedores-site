import React, { useState } from 'react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [consultingType, setConsultingType] = useState('');
  const [professional, setProfessional] = useState('');
  const [observations, setObservations] = useState('');

  const events = [
    {
      id: 1,
      type: 'Workshop',
      title: 'Workshop: Planejamento Financeiro para Empreendedores',
      description: 'Aprenda as melhores práticas para gerenciar as finanças do seu negócio.',
      date: '15/03/2024',
      time: '14:00',
      duration: '2 horas',
      location: 'Online',
      participants: '25/30',
      instructor: 'Dr. Ana Silva',
      price: 'Gratuito',
      buttonText: 'Inscrever-se',
      buttonLink: '#'
    },
    {
      id: 2,
      type: 'Palestra',
      title: 'Palestra: Mindfulness no Ambiente de Trabalho',
      description: 'Técnicas de mindfulness para reduzir o estresse e aumentar a produtividade.',
      date: '18/03/2024',
      time: '19:00',
      duration: '1.5 horas',
      location: 'São Paulo, SP',
      participants: '45/50',
      instructor: 'Carlos Santos',
      price: 'R$ 50,00',
      buttonText: 'Comprar Ingresso',
      buttonLink: '#'
    },
    {
      id: 3,
      type: 'Curso',
      title: 'Curso: Nutrição para Profissionais Ocupados',
      description: 'Estratégias práticas para manter uma alimentação saudável mesmo com a agenda lotada.',
      date: '20/03/2024',
      time: '10:00',
      duration: '4 horas',
      location: 'Online',
      participants: '15/20',
      instructor: 'Dra. Maria Costa',
      price: 'R$ 120,00',
      buttonText: 'Comprar Ingresso',
      buttonLink: '#'
    },
    {
      id: 4,
      type: 'Consultoria',
      title: 'Consultoria: Aspectos Legais do Empreendedorismo',
      description: 'Consultoria individual sobre questões jurídicas para empreendedores.',
      date: '22/03/2024',
      time: '15:30',
      duration: '1 hora',
      location: 'Brasília, DF',
      participants: '1/1',
      instructor: 'Dr. João Oliveira',
      price: 'R$ 200,00',
      buttonText: 'Comprar Ingresso',
      buttonLink: '#'
    },
  ];

  const availableTimes = [
    { time: '09:00', status: 'Disponível' },
    { time: '10:00', status: 'Ocupado' },
    { time: '11:00', status: 'Disponível' },
    { time: '14:00', status: 'Disponível' },
    { time: '15:00', status: 'Ocupado' },
    { time: '16:00', status: 'Disponível' },
    { time: '17:00', status: 'Disponível' },
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendar = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday, etc.

    const calendarDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

      calendarDays.push(
        <div
          key={day}
          className={`p-2 border rounded-md text-center cursor-pointer ${isToday ? 'bg-blue-200' : ''} ${isSelected ? 'bg-purple-600 text-white' : 'hover:bg-gray-100'}`}
          onClick={() => setSelectedDate(date)}
        >
          {day}
        </div>
      );
    }
    return calendarDays;
  };

  const handleScheduleSubmit = () => {
    alert(`Agendamento solicitado para ${selectedDate.toLocaleDateString()} às ${selectedTime} com ${professional} para ${consultingType}. Observações: ${observations}`);
    // Aqui você integraria com um backend para salvar o agendamento
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Agenda de Eventos</h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Participe de workshops, palestras, cursos e agende consultorias individuais com nossos especialistas.
      </p>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="events">Próximos Eventos</TabsTrigger>
          <TabsTrigger value="consulting">Agendar Consultoria</TabsTrigger>
        </TabsList>

        <TabsContent value="events">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Próximos Eventos</h2>
          <div className="flex justify-end mb-4">
            <Button variant="outline" className="text-gray-700">Filtrar</Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map(event => (
              <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">{event.type}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">{event.price}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="text-gray-500 text-sm space-y-1">
                  <p>🗓️ {event.date} às {event.time}</p>
                  <p>⏳ Duração: {event.duration}</p>
                  <p>📍 {event.location}</p>
                  <p>👥 {event.participants}</p>
                  <p>🗣️ Instrutor: {event.instructor}</p>
                </div>
                <Button asChild className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md">
                  <a href={event.buttonLink}>{event.buttonText}</a>
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="consulting">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Agendar Consultoria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-6 rounded-lg shadow-md">
            {/* Calendar */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Selecione a Data</h3>
              <div className="grid grid-cols-7 gap-2 text-sm">
                <div className="font-bold text-center">Dom</div>
                <div className="font-bold text-center">Seg</div>
                <div className="font-bold text-center">Ter</div>
                <div className="font-bold text-center">Qua</div>
                <div className="font-bold text-center">Qui</div>
                <div className="font-bold text-center">Sex</div>
                <div className="font-bold text-center">Sáb</div>
                {renderCalendar()}
              </div>
              <div className="flex justify-between mt-4">
                <Button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))} variant="outline">Anterior</Button>
                <span className="font-semibold">{selectedDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}</span>
                <Button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))} variant="outline">Próximo</Button>
              </div>
            </div>

            {/* Available Times */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Horários Disponíveis</h3>
              <div className="grid grid-cols-2 gap-2">
                {availableTimes.map((slot, index) => (
                  <Button
                    key={index}
                    variant={selectedTime === slot.time ? "default" : "outline"}
                    className={`${slot.status === 'Ocupado' ? 'bg-red-200 text-red-800 cursor-not-allowed' : 'bg-green-200 text-green-800 hover:bg-green-300'}`}
                    onClick={() => slot.status === 'Disponível' && setSelectedTime(slot.time)}
                    disabled={slot.status === 'Ocupado'}
                  >
                    {slot.time} {slot.status}
                  </Button>
                ))}
              </div>
            </div>

            {/* Booking Details */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Detalhes do Agendamento</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="consultingType" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Consultoria</label>
                  <Select onValueChange={setConsultingType}>
                    <SelectTrigger id="consultingType">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Consultoria Empresarial">Consultoria Empresarial</SelectItem>
                      <SelectItem value="Sessão de Terapia">Sessão de Terapia</SelectItem>
                      <SelectItem value="Consultoria Nutricional">Consultoria Nutricional</SelectItem>
                      <SelectItem value="Consultoria Jurídica">Consultoria Jurídica</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="professional" className="block text-sm font-medium text-gray-700 mb-1">Profissional</label>
                  <Select onValueChange={setProfessional}>
                    <SelectTrigger id="professional">
                      <SelectValue placeholder="Selecione o profissional" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dr. Ana Silva - Economista">Dr. Ana Silva - Economista</SelectItem>
                      <SelectItem value="Carlos Santos - Terapeuta">Carlos Santos - Terapeuta</SelectItem>
                      <SelectItem value="Dra. Maria Costa - Nutricionista">Dra. Maria Costa - Nutricionista</SelectItem>
                      <SelectItem value="Dr. João Oliveira - Advogado">Dr. João Oliveira - Advogado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="observations" className="block text-sm font-medium text-gray-700 mb-1">Observações</label>
                  <Textarea
                    id="observations"
                    placeholder="Descreva brevemente o que gostaria de abordar na consultoria..."
                    value={observations}
                    onChange={(e) => setObservations(e.target.value)}
                  />
                </div>
                <p className="text-sm text-gray-500">Data selecionada: {selectedDate.toLocaleDateString('pt-BR')}</p>
                {selectedTime && <p className="text-sm text-gray-500">Horário selecionado: {selectedTime}</p>}
                <Button onClick={handleScheduleSubmit} className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md">
                  Confirmar Agendamento
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Schedule;
