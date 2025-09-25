"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  LineChart,
  PieChart,
  Wallet,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardContent() {
  const transactions = [
    { id: "t1", name: "Amazon.com", amount: "-$99.99", date: "Today" },
    { id: "t2", name: "Salary Deposit", amount: "+$3,500.00", date: "Yesterday" },
    { id: "t3", name: "Netflix", amount: "-$14.99", date: "Apr 12, 2023" },
    { id: "t4", name: "Stock Dividend", amount: "+$32.50", date: "Apr 10, 2023" },
    { id: "t5", name: "Grocery Store", amount: "-$156.34", date: "Apr 8, 2023" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your finances.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Investments</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$28,439.12</div>
            <div className="flex items-center pt-1">
              <ArrowUpRight className="mr-1 h-4 w-4 text-emerald-500" />
              <span className="text-xs text-emerald-500">+4.3%</span>
              <span className="text-xs text-muted-foreground ml-1">today</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expenses</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,592.36</div>
            <div className="flex items-center pt-1">
              <ArrowDownRight className="mr-1 h-4 w-4 text-rose-500" />
              <span className="text-xs text-rose-500">+2.5%</span>
              <span className="text-xs text-muted-foreground ml-1">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings Rate</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.3%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Portfolio Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Portfolio Overview</CardTitle>
            <CardDescription>Your investment allocation</CardDescription>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center border-t pt-4">
            <div className="text-center text-muted-foreground">
              [Portfolio Chart Visualization]
            </div>
          </CardContent>
        </Card>

        <Card className="row-span-2">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your recent financial activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    transaction.amount.startsWith("+") ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"
                  }`}>
                    {transaction.amount.startsWith("+") ? "+" : "-"}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{transaction.name}</div>
                    <div className="text-sm text-muted-foreground">{transaction.date}</div>
                  </div>
                  <div className={`font-medium ${
                    transaction.amount.startsWith("+") ? "text-emerald-600" : "text-rose-600"
                  }`}>
                    {transaction.amount}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <Button variant="ghost" className="w-full" size="sm">
                View All Transactions
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Monthly Spending</CardTitle>
            <CardDescription>Your spending by category</CardDescription>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center border-t pt-4">
            <div className="text-center text-muted-foreground">
              [Spending Chart Visualization]
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
