import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server-hapi';

const typeDefs: DocumentNode = gql`
  """
  Тип описывающи поля пользователя
  """
  type Users {
    # Уникальный идентификатор пользователя
    _id: ID!
    # Номер квартиры пользователя
    apartment: Int!
    # Имя пользователя
    firstName: String!
    # Фамилия пользователя
    lastName: String!
    # Лицевой счет пользователя
    account: String!
    # Флаг супер-пользователя
    isAdmin: Boolean!
  }

  """
  Ответ от сервера на добавление нового пользователя
  """
  type AddUserResponse {
    # Код ответа (404 / 500 / 200)
    code: Int!
    # Флаг удачности запроса
    success: Boolean!
    # Сообщение об ошибке/успешности запроса
    message: String!
    # Данные нового пользователя
    user: Users
  }

  """
  Параметры для создания нового пользователя
  """
  input AddUserArguments {
    # Номер квартиры пользователя
    apartment: Int!
    # Имя пользователя
    firstName: String!
    # Фамилия пользователя
    lastName: String!
    # Лицевой счет пользователя
    account: String!
    # Флаг супер пользователя
    isAdmin: Boolean
  }

  """
  Типы описывающие запросы на получени данных
  """
  type Query {
    # Получить всех пользователей
    getUsers: [Users!]!
  }

  """
  Типы описывающие запросы на изменение данных
  """
  type Mutation {
    # Добавить нового пользователя
    addUser(data: AddUserArguments!): AddUserResponse!
  }
`;

export default typeDefs;
