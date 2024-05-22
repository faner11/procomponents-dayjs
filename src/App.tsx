// import { Button,DatePicker } from 'antd';
import dayjs from 'dayjs';
/**
 * 如果注释DatePicker/ Button 值为 2024-02-01 00:00:00
 * 如果不注释DatePicker/ Button 值为 2024-05-20 00:00:00 ，日期为当天
 */
function App() {
  return (
    <>
    {dayjs("2024-02","gggg-ww").format("YYYY-MM-DD HH:mm:ss")}
    {/* <DatePicker/> */}
    {/* <Button>222</Button> */}
    </>
  )
}
export default App
