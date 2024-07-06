import React from 'react';
import './App.css';
import SupportInfo from './SupportInfo/SupportInfo';
import CallToAction from './CallToAction/CallToAction';

function App() {
  const supportItems = [
    {
      icon: '🎓',
      title: 'Scholarships',
      description: 'This means that you will never have to worry about paying a penny to learn a new skill. Our partners have ensured that you are able to upskill at the comfort of your home with no cost to you.',
    },
    {
      icon: '💬',
      title: 'Free Counselling Sessions',
      description: 'Every student has access to a number of wellbeing and counselling sessions with our partners at frontline therapists.',
    },
    {
      icon: '👶',
      title: 'Childcare Support',
      description: 'Every mum on our bootcamps is eligible to apply to receive up to £250 in childcare vouchers as a way of supporting you whilst learning.',
    },
    {
      icon: '⭐',
      title: '4.75 / 5 Average Reviews',
      description: 'We are focused on ensuring every student has the best experience our bootcamps have to offer.',
    },
    {
      icon: '📊',
      title: '75% Employment Rate',
      description: 'This is from our 2020 outcomes. Our students have been able to go on to work at some awesome organisations from junior to senior levels.',
    },
    {
      icon: '📈',
      title: '560 people Upskilled',
      description: 'Since 2020, we have upskilled 560 to start a career in tech and progress into more senior roles in tech in companies like Northrop Grumman, Zappi, KPMG and many more.',
    },
    {
      icon: '🎓',
      title: 'Dedicated Career Support from Day One',
      description: 'You will have Hannah, our employability and career coach here to support you from your first day. She will help you with your LinkedIn, CV and also interview coaching.',
    },
    {
      icon: '🔓',
      title: 'Exclusive Access to Open Roles to All Our Hiring Partners',
      description: 'Exclusive access to open roles to all our hiring partners',
    },
    {
      icon: '🎁',
      title: 'Cool Rewards',
      description: 'We like to reward our students during really important milestones. All our rewards come with an element of surprise.',
    },
    {
      icon: '💪',
      title: 'Empowerment Evenings and Events',
      description: 'Free access to empowerment workshops and events by men and women who are excelling in their careers and businesses.',
    },
    {
      icon: '🌐',
      title: '7000+ Community of talents',
      description: 'We’ve grown an organic community of 7000 people who are passionate about tech and the intersections of it with other industries.',
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
