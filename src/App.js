import React from 'react';
import './App.css';
import SupportInfo from './SupportInfo/SupportInfo';
import CallToAction from './CallToAction/CallToAction';

function App() {
  const supportItems = [
    {
      icon: '🎓',
      title: 'Scholarships',
      description: 'This means that you will never have to worry about paying a penny to learn a new skill...',
    },
    {
      icon: '💬',
      title: 'Free Counselling Sessions',
      description: 'Every student has access to a number of wellbeing and counselling sessions...',
    },
    {
      icon: '👶',
      title: 'Childcare Support',
      description: 'Every mum on our bootcamps is eligible to apply to receive up to £250 in childcare vouchers...',
    },
    {
      icon: '⭐',
      title: '4.75 / 5 Average Reviews',
      description: 'We are focused on ensuring every student has the best experience our bootcamps have to offer...',
    },
    {
      icon: '📊',
      title: '75% Employment Rate',
      description: 'This is from our 2020 outcomes. Our students have been able to go on to work...',
    },
    {
      icon: '📈',
      title: '560 people Upskilled',
      description: 'Since 2020, we have upskilled 560 to start a career in tech...',
    },
    {
      icon: '🎓',
      title: 'Dedicated Career Support from Day One',
      description: 'You will have Hannah, our employability and career coach...',
    },
    {
      icon: '🔓',
      title: 'Exclusive Access to Open Roles to All Our Hiring Partners',
      description: 'Exclusive access to open roles to all our hiring partners...',
    },
    {
      icon: '🎁',
      title: 'Cool Rewards',
      description: 'We like to reward our students during really important milestones...',
    },
    {
      icon: '💪',
      title: 'Empowerment Evenings and Events',
      description: 'Free access to empowerment workshops and events by men and women...',
    },
    {
      icon: '🌐',
      title: '7000+ Community of talents',
      description: 'We’ve grown an organic community of 7000...',
    },
  ];

  return (
    <div className="App">
      <SupportInfo items={supportItems} />
      <CallToAction />
    </div>
  );
}

export default App;
