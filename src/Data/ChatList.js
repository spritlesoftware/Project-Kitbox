import {user_1, user_2, user_3} from './ChatRoom';

const dateFormatter = timestamp => {
  const date = new Date(timestamp);

  const today = new Date(); // Get the current date.

  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const isYesterday =
    new Date(date.getTime() + 86400000).getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const addLeadingZero = value => {
    return value < 10 ? `0${value}` : value.toString();
  };

  let formattedDate;

  if (isToday) {
    formattedDate = 'Today';
  } else if (isYesterday) {
    formattedDate = 'Yesterday';
  } else {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() % 100;
    formattedDate = `${addLeadingZero(day)}/${addLeadingZero(
      month,
    )}/${addLeadingZero(year)}`;
  }

  return formattedDate;
};

export const chatList = [
  {
    user_id: 1,
    name: 'Alice Johnson',
    last_msg: user_1[0].text,
    modified_date: dateFormatter(user_1[0].createdAt),
    profile_pic:
      'data:image/jpeg;base64,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',
    msg_read: false,
    active: true,
    last_seen: '',
  },
  {
    user_id: 2,
    name: 'Bob Smith',
    last_msg: user_2[0].text,
    modified_date: dateFormatter(user_2[0].createdAt),
    profile_pic:
      'data:image/jpeg;base64,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',
    msg_read: false,
    active: true,
    last_seen: '',
  },
  {
    user_id: 3,
    name: 'Eva Williams',
    last_msg: user_3[0].text,
    modified_date: dateFormatter(user_3[0].createdAt),
    profile_pic:
      'data:image/jpeg;base64,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',
    msg_read: false,
    active: false,
    last_seen: '9m',
  },
  {
    user_id: 4,
    name: 'David Brown',
    last_msg: 'See you later!',
    modified_date: dateFormatter(user_3[0].createdAt),
    profile_pic:
      'data:image/jpeg;base64,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',
    msg_read: true,
    active: true,
    last_seen: '',
  },
  {
    user_id: 5,
    name: 'Olivia Davis',
    last_msg: "I'm on my way!",
    modified_date: dateFormatter(user_3[0].createdAt),
    profile_pic:
      'data:image/jpeg;base64,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',
    msg_read: true,
    active: false,
    last_seen: '13m',
  },
  {
    user_id: 6,
    name: 'Michael Lee',
    last_msg: 'Have a great day!',
    modified_date: dateFormatter(user_3[1].createdAt),
    profile_pic:
      'data:image/jpeg;base64,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',
    msg_read: true,
    active: false,
    last_seen: '11m',
  },
  {
    user_id: 7,
    name: 'Sophia White',
    last_msg: "What's new?",
    modified_date: dateFormatter(user_3[1].createdAt),
    profile_pic:
      'data:image/jpeg;base64,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',
    msg_read: true,
    active: false,
    last_seen: '2m',
  },
  {
    user_id: 8,
    name: 'James Miller',
    last_msg: "Let's catch up soon!",
    modified_date: dateFormatter(user_3[1].createdAt),
    profile_pic:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9EWJXakOBhOQvhl8k0GCRsakU9RxV2m-qiQ&usqp=CAU',
    msg_read: true,
    active: false,
    last_seen: '1m',
  },
  {
    user_id: 9,
    name: 'Emma Harris',
    last_msg: 'Meeting in 15 minutes',
    modified_date: dateFormatter(user_3[1].createdAt),
    profile_pic:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCczoMDFIc77qVeqtnJ26h8Yen0WXNfyLTIg&usqp=CAU',
    msg_read: true,
    active: true,
    last_seen: '',
  },
  {
    user_id: 10,
    name: 'Daniel Wilson',
    last_msg: 'See you at the party!',
    modified_date: dateFormatter(user_3[1].createdAt),
    profile_pic:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdI3kbxVEj5tgnqz7bTEmLqDOjvsyl-sq27g&usqp=CAU',
    msg_read: true,
    active: false,
    last_seen: '17m',
  },
];
