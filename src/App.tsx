import dayjs from 'dayjs';
import { ProTable } from '@ant-design/pro-components';
/**
 * 如果注释ProTable 值为 2024-02-01 00:00:00
 * 如果不注释ProTable 值为 2024-05-20 00:00:00 ，日期为当天
 */
function App() {
  return (
    <>
    {dayjs("2024-02","gggg-ww").format("YYYY-MM-DD HH:mm:ss")}
    <ProTable/>
    </>
  )
}

export default App
