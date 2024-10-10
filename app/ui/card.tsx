// {
//     "id": 2,
//     "email": "email2@gmail.com",
//     "name": "name2",
//     "password": "$2b$10$MMf3VufSSSGbCCcHCUM.6ubrYuLixi0rOp9d6FdCJID94tRvWCngO"
// }

type Props2 = {
  user: {
    id: number;
    email: string;
    name: string;
    password: string;
  };
};

export default function Card(props: Props2) {
  console.log(props);
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0"></div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {props.user.name}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {props.user.email}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
