***About this single page application***

This consists of 4 fields:
1. Username
2. Mobile number
3. E-mail
4. Password

Along with each field is the validation condition which uses regex, to check whether the entered value follows certain criterias for each field.

*Criterias for each field*

    A) Username:
       
       1. Usernames can only use alpha-numeric characters.

       2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

       3. Username letters can be lowercase and uppercase.

       4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

       Note: This is one of the conditions taken from https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames

    B) Mobile Number:
        
        1. Should begin with '+' followed by 2 digits which specifies the country code.

        2. Should contain a space after country code

        3. The mobile number should contain only 5-10 digits.

        4. This should be the format: +(countrycode)<space>(5-10 digits mobile number) 
    
    C)  E-mail:

        1. Should not begin with digits(before @)

        2. Should not contain digits between alphabets(before @)

        3. Should not contain any special characters(before @)

        4. Words followed by numbers allowed(before @)

        5. domain name should consist of alphabets only

        6. Case insensitive ['a' and 'A' are same]
    
    D) Password
           1. 7-10 characters

           2. Begins with 1 special charater only ,from [@,#,&,$]

           3. Ends with 2 digits between [0-9]

           4. No whitespaces allowed

           5. Alphabets used are case sensitive[ 'a' and 'A' are treated as different]


    


