import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Icon from '@/components/ui/icon';
import func2url from '../../backend/func2url.json';

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  leadType?: string;
  defaultSubject?: string;
  compact?: boolean;
}

const LeadForm = ({
  title = 'Оставьте заявку',
  subtitle = 'Перезвоним в течение 15 минут',
  leadType = 'contact',
  defaultSubject = '',
  compact = false,
}: LeadFormProps) => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    subject: defaultSubject,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error('Укажите имя и телефон');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(func2url.leads, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lead_type: leadType }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Заявка отправлена! Скоро свяжемся.');
        setSent(true);
        setForm({ name: '', phone: '', email: '', company: '', subject: defaultSubject, message: '' });
      } else {
        toast.error(data.error || 'Ошибка отправки');
      }
    } catch {
      toast.error('Не удалось отправить. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="bg-white border-2 border-accent rounded-lg p-8 text-center">
        <Icon name="CheckCircle2" size={48} className="text-accent mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Заявка принята</h3>
        <p className="text-muted-foreground">Наш специалист свяжется с вами в ближайшее время.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-lg p-6 lg:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      </div>

      <div className={compact ? 'space-y-3' : 'grid md:grid-cols-2 gap-4'}>
        <div>
          <Label htmlFor="name">Имя *</Label>
          <Input id="name" name="name" value={form.name} onChange={handleChange} required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="phone">Телефон *</Label>
          <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} className="mt-1" />
        </div>
        <div>
          <Label htmlFor="company">Компания</Label>
          <Input id="company" name="company" value={form.company} onChange={handleChange} className="mt-1" />
        </div>
        <div className={compact ? '' : 'md:col-span-2'}>
          <Label htmlFor="subject">Тема обращения</Label>
          <Input id="subject" name="subject" value={form.subject} onChange={handleChange} className="mt-1" />
        </div>
        <div className={compact ? '' : 'md:col-span-2'}>
          <Label htmlFor="message">Сообщение</Label>
          <Textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} className="mt-1" />
        </div>
      </div>

      <Button type="submit" disabled={loading} className="mt-6 w-full md:w-auto bg-accent hover:bg-accent/90 text-white">
        {loading ? 'Отправка...' : 'Отправить заявку'}
        <Icon name="ArrowRight" size={16} className="ml-2" />
      </Button>

      <p className="text-xs text-muted-foreground mt-4">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
      </p>
    </form>
  );
};

export default LeadForm;
