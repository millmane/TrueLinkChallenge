# Recur

### Problem
* Events occur every N Months on/before a specific day of the month
* calculated date = March 4th
* delivery date if March 4th is on a Sunday = March 2nd, since that would be the last occurring business day
* Events can only occur on business days on or before the calculated date

### General Solution

* loop the following
* Check the current DeliveryDate.  If it is a restricted date(Sunday, Saturday, Holiday), then go back 1 day.
* If not restricted, store the date and change dates day to CalculatedDate.getDay() and the dates month to StartedDate.getMonth + (Recur ** NumberOfStoredDates).  
Ex: if Recur is every 2 months, and we started in Jan, we want to find our first date, then move forward 2 months to March.  After finding a second date, we want to move forward 4 months, or (Recur * 2), to May.
* end the loop
* return the stored dates

* Note: there are no error checks in this and it could be optimized.  Such as when we are on Sunday, there is no need to go back only 1 day to Saturday, since that will always be restricted.



### Solution

* Given StartDate and CalculatedDate

* DeliveryDate is the first business day on or before the CalculatedDate

* Create an array Holidays - since year determines the day of the month, this will be be hard coded in to start.  There are ways to calculate this for many Holidays(always the second Thursday of a month, etc..)

* Determine the day of the week using the getDay() method(returns 0 = Sunday, 1 = Monday, etc... given a Date)

```
StartDate = "01-01-1900"
CalculatedDate = "05-14-1990"
Recure = 2 //number of months between events

StartDate = new Date(StartDate)
StartDateDay = StartDate.getDay()

CalculatedDate = new Date(CalculatedDate)
CalculatedDateDay = CalculatedDate.getDay()
```

* Now that we have both the Date and the day it falls on, we can check if it is in a restricted spot.

* No Error checks or edge cases in this.  Should be checking for when the year changes too

```
DeliveryDate = CalculatedDate
DeliveryDateDay = CalculatedDateDay

DeliveryDates = []

//4 is number of future dates you want(can be number) or stop if you go before StartDate.
while (DeliveryDates.length <= 4 && DeliveryDate >= StartDate) {
    if (DeliveryDateDay === 0 ||
        DeliveryDateDay === 6 ||
        Holidays.indexOf(DeliveryDate) > -1)
    { //go back in time 1 day
      DeliveryDate = new Date(new Date().setDate(DeliveryDate.getDate() - 1))
    } else { //add date and go to next month based on Recure
      DeliveryDates.push(DeliveryDate)
      DeliveryDate.setDate(CalculatedDate.getDate())
      DeliveryDate.setMonth(StartDate.getMonth() + Recure * DeliveryDates.length)
    }
  }

return DeliveryDates

```

### Resources
* subtracting days from a date http://stackoverflow.com/questions/1296358/subtract-days-from-a-date-in-javascript
