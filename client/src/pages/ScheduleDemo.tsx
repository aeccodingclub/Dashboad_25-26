import Layout from "../components/Layout"
import MonthlySchedule from "../components/MonthlySchedule"

const ScheduleDemo = () => {
  return (
    <Layout className="w-full items-center">
      <div className="w-full max-w-7xl flex items-center justify-center p-4">
        <MonthlySchedule />
      </div>
    </Layout>
  )
}

export default ScheduleDemo
