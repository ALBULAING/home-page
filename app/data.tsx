import { MailIcon, MapPinIcon } from "lucide-react";
import { nanoid } from 'nanoid'
import { GitHubIcon } from "@/components/icons/github-icon";
import { JuejinIcon } from "@/components/icons/juejin-icon";
import { AllCard } from "@/app/cards";
import ClockCard from "@/app/cards/clock";
import MoodCard from "@/app/cards/mood";

export const displayList: Array<AllCard> = [
  {
    id: nanoid(),
    type: 'project',
    previewImg: '/images/barrage-preview.png',
    name: 'Web Barrage',
    tags: [
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'JavaScript', color: '#F1E05A' },
      { name: 'HTML', color: '#E34C26' },
      { name: 'CSS', color: '#563D7C' },
    ],
    describe: '🎉 Web 端弹幕组件',
    codeUrl: 'https://github.com/hai-zou/web-barrage',
    demoUrl: 'https://hai-zou.github.io/web-barrage/',
  },
  {
    id: nanoid(),
    type: 'project',
    previewImg: '/images/travel-preview.png',
    name: 'Travel Record',
    tags: [
      { name: 'JavaScript', color: '#F1E05A' },
      { name: 'HTML', color: '#E34C26' },
    ],
    describe: '🌍 记录每一个到过的地方！',
    codeUrl: 'https://github.com/hai-zou/travel-record',
    demoUrl: 'https://travel-record.luckyzh.cn',
  },
  {
    id: nanoid(),
    type: 'project',
    previewImg: '/images/blog-preview.png',
    name: '阿凉の杂货铺',
    tags: [
      { name: 'JavaScript', color: '#F1E05A' },
      { name: 'CSS', color: '#563D7C' },
      { name: 'Nunjucks', color: '#3D8137' },
    ],
    describe: '阿凉的个人博客 📝 | 本站致力于分享各种实用资源',
    codeUrl: 'https://github.com/ALBULAING/ALBULAING.github.io',
    demoUrl: 'https://cool.com.mp',
  },
  {
    id: nanoid(),
    type: 'user',
    avatar: '/images/al.jpg',
    name: '阿凉不凉',
    social: [
      {
        name: 'Location',
        url: 'https://www.google.com/maps/place/ganzhou',
        icon: <MapPinIcon width={16} height={16} />,
        openNewPage: true,
      },
      {
        name: 'Email',
        url: 'my@loving.cloudns.be',
        icon: <MailIcon width={16} height={16} />,
        openNewPage: false,
      },
      {
        name: 'Github',
        url: 'https://github.com/ALBULAING',
        icon: <GitHubIcon width={16} height={16} />,
        openNewPage: true,
      },
      {
        name: '公众号',
        url: 'https://web.free.nf/WeChat/',
        icon: <JuejinIcon width={16} height={16} />,
        openNewPage: true,
      },
    ],
    describe: '静坐常思己过，闲谈莫论人非',
  },
  {
    id: nanoid(),
    type: 'custom',
    name: 'mood',
    children: <MoodCard />,
  },
  {
    id: nanoid(),
    type: 'custom',
    name: 'clock',
    children: <ClockCard />,
  },
];
