# Writeup - Basic sql vuln lab

## Description about challenge
This is a basic SQL injection lab with a logic bypass vulnerability in the sign in form. The aim is to learn how to test an application to see whether there is an sql vulnerability in an input and then figuring out the right payload.

## Solution:
1. Check members of the app in sidebar menu
2. Confirm that there is an sql vulnerability by appending a random username with '
3. Attack each of the users in the app using a basic logic bypass injection - that is, entering a payload with '--' appended
4. Flag is contained in the Last Purchased section of user - Dini

## Flag:
INTRO_TO_CTF{i_Love_Eating_Bred}