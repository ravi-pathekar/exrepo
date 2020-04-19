Today I restructured the code. I made components for each functionality.
For filtering data I made a component called Filter.js,
for combo box I made a component, ComboBox.js and
for deleting record from the table, made a component, EditDelete.js and 
then imported them into a module called AggridTable.js and this component
is imported into App.js

17/04/2020 - 12:00PM

Added functionality of showing and hiding columns. For this i created a 
popover and in popover I added three buttons for showing/hiding first name,
last name and email columns.

17/04/2020 - 4:00 PM

Made a component, Popover.js and imported it into Aggrid.js.
Faced issues while passing parameters in method from child component but
solved it by google it.

Currently facing an issue while using for...in loop. Cannot set the value to false
of any property of this.state.

17/04/2020 - 7:00 PM

Added aggrid pagination in aggrid table. After that destructured the code.

facing issue - Failed prop type.

18/04/2020 - 12:00 PM

Trying to make a child-parent relationship for filtering row data. 
But getting errors.

18/04/2020 - 4:00 PM

Refactored the functionality of showing and hiding columns. 
In filter.js I am getting a warning 'Array-callback-return'
(tryimg to resolve it)

18/04/2020 - 7:00 PM

refactored the code of Popover.js. Now the states are managed by the child component.

19/04/2020 - 12:00 PM

'Failed prop type:' warning resolved.
Refactoring done.

19/04/2020 - 4:00 PM

Pagination added and restructured it.