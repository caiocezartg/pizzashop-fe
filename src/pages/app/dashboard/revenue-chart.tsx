import { getDailyRevenueInPeriod } from '@/api/get-daily-revenue-in-period'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
} from 'recharts'

import colors from 'tailwindcss/colors'

export function RevenueChart() {
  const { data: dailyRevenueInPeriod } = useQuery({
    queryKey: ['metrics', 'revenue-in-period'],
    queryFn: getDailyRevenueInPeriod,
  })

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {dailyRevenueInPeriod && (
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={dailyRevenueInPeriod} style={{ fontSize: 12 }}>
              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                tickFormatter={(value: number) =>
                  value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                }
                width={80}
              />
              <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />

              <CartesianGrid vertical={false} className="stroke-muted" />

              <Line
                type="linear"
                strokeWidth={2}
                dataKey="receipt"
                stroke={colors.rose['400']}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  )
}
