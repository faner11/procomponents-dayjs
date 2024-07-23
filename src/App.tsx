import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import type React from 'react'
import dayjsLocal from 'dayjs/locale/pt-br'

dayjs.locale(dayjsLocal)

const App: React.FC = () => (
  <div>
    <DatePicker
      onChange={(value) => {
        console.info('date change', value.toISOString())
      }}
    />

    <DatePicker
      picker="week"
      onChange={(value) => {
        console.info('date change', value.toISOString())
      }}
    />
  </div>
)

export default App
