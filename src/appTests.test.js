import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import UsersList from './UsersList';

it('renders withiut crashing', () => {
  shallow(<App />);
});

it('includes input', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<input />)).toEqual(true);
});

it('includes UsersList', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<UsersList />)).toEqual(true);
});

it('shows message whe there are no users', () => {
  const usersList = shallow(<UsersList users={[]} />);
  expect(usersList.text()).toContain('No Results!');
});

it('dosent show message when there are users', () => {
  const usersList = shallow(<UsersList users={['Andrzej']} />);
  expect(usersList.text()).not.toContain('No Results!');
});

it('shows list of users', () => {
  const users = ['Brajan', 'Dżesika', 'Karyna'];
  const usersList = shallow(<UsersList users={users} />);
  expect(usersList.find('li').length).toEqual(users.length);
});

describe('list of users', () => {
  const users = ['Brajan', 'Dżesika', 'Karyna'];
  const usersList = shallow(<UsersList users={users} />);
  users.forEach(user => {
    it(`includes name ${user} on the list`, () => {
      expect(usersList.containsMatchingElement(<li>{user}</li>)).toEqual(true);
    });
  });
});

it('App passes users to the UsersList', () => {
  const users = ['Brajan', 'Dżesika', 'Karyna'];
  const app = shallow(<App />);
  app.setState({ filteredUsers: users });

  expect(app.find('UsersList').prop('users')).toEqual(['Brajan', 'Dżesika', 'Karyna']);
});

describe('change props', () => {
  const users = ['Brajan', 'Dżesika', 'Karyna'];
  const usersList = shallow(<UsersList users={['Ktoś', 'Coś']} />);
  usersList.setProps({ users });
  
  users.forEach(user => {
    it(`includes name ${user} on the list`, () => {
      expect(usersList.containsMatchingElement(<li>{user}</li>)).toEqual(true);
    });
  });
});