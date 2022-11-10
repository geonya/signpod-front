import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type CreateAccountInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type CreateAccountOutput = {
  __typename?: 'CreateAccountOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateWorkInput = {
  category: Scalars['String'];
  description: Scalars['String'];
  title: Scalars['String'];
};

export type CreateWorkOutput = {
  __typename?: 'CreateWorkOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditAccountInput = {
  company?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type EditAccountOutput = {
  __typename?: 'EditAccountOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type FindUserByIdInput = {
  id: Scalars['Int'];
};

export type FindUserByIdOutput = {
  __typename?: 'FindUserByIdOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type GetWorksOutput = {
  __typename?: 'GetWorksOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  works?: Maybe<Array<Work>>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type LogoutOutput = {
  __typename?: 'LogoutOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type MeOutput = {
  __typename?: 'MeOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: CreateAccountOutput;
  createWork: CreateWorkOutput;
  editAccount: EditAccountOutput;
  login: LoginOutput;
  logout: LogoutOutput;
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationCreateWorkArgs = {
  files?: InputMaybe<Array<Scalars['Upload']>>;
  input: CreateWorkInput;
};


export type MutationEditAccountArgs = {
  file?: InputMaybe<Scalars['Upload']>;
  input: EditAccountInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};

export type Photo = {
  __typename?: 'Photo';
  alt?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  workId?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  findUserById: FindUserByIdOutput;
  getWorks: GetWorksOutput;
  me: MeOutput;
};


export type QueryFindUserByIdArgs = {
  input: FindUserByIdInput;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  password: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  works?: Maybe<Array<Work>>;
};

export type Work = {
  __typename?: 'Work';
  category?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  photos: Array<Photo>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserFragmentFragment = { __typename?: 'User', id: number, name: string, email: string, avatar?: string | null, company?: string | null, createdAt: any, updatedAt: any };

export type WorkFrgamentFragment = { __typename?: 'Work', id: number, title: string, description?: string | null, createdAt: any, updatedAt: any, category?: string | null, creator?: { __typename?: 'User', id: number, name: string, email: string, avatar?: string | null } | null, photos: Array<{ __typename?: 'Photo', id: number, url: string, alt?: string | null }> };

export type PhotoFragmentFragment = { __typename?: 'Photo', id: number, url: string, alt?: string | null, workId?: number | null };

export type CreateAccountMutationVariables = Exact<{
  input: CreateAccountInput;
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'CreateAccountOutput', ok: boolean, error?: string | null } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', ok: boolean, error?: string | null } };

export type EditAccountMutationVariables = Exact<{
  input: EditAccountInput;
  file?: InputMaybe<Scalars['Upload']>;
}>;


export type EditAccountMutation = { __typename?: 'Mutation', editAccount: { __typename?: 'EditAccountOutput', ok: boolean, error?: string | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'LogoutOutput', ok: boolean, error?: string | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'MeOutput', ok: boolean, error?: string | null, user?: { __typename?: 'User', id: number, name: string, email: string, avatar?: string | null, company?: string | null, createdAt: any, updatedAt: any } | null } };

export type CreateWorkMutationVariables = Exact<{
  input: CreateWorkInput;
  files: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type CreateWorkMutation = { __typename?: 'Mutation', createWork: { __typename?: 'CreateWorkOutput', ok: boolean, error?: string | null } };

export type GetWorksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorksQuery = { __typename?: 'Query', getWorks: { __typename?: 'GetWorksOutput', ok: boolean, error?: string | null, works?: Array<{ __typename?: 'Work', id: number, title: string, description?: string | null, createdAt: any, updatedAt: any, category?: string | null, creator?: { __typename?: 'User', id: number, name: string, email: string, avatar?: string | null } | null, photos: Array<{ __typename?: 'Photo', id: number, url: string, alt?: string | null }> }> | null } };

export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  name
  email
  avatar
  company
  createdAt
  updatedAt
}
    `;
export const WorkFrgamentFragmentDoc = gql`
    fragment WorkFrgament on Work {
  id
  title
  description
  createdAt
  updatedAt
  category
  creator {
    id
    name
    email
    avatar
  }
  photos {
    id
    url
    alt
  }
}
    `;
export const PhotoFragmentFragmentDoc = gql`
    fragment PhotoFragment on Photo {
  id
  url
  alt
  workId
}
    `;
export const CreateAccountDocument = gql`
    mutation CreateAccount($input: CreateAccountInput!) {
  createAccount(input: $input) {
    ok
    error
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateAccountGQL extends Apollo.Mutation<CreateAccountMutation, CreateAccountMutationVariables> {
    document = CreateAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    ok
    error
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EditAccountDocument = gql`
    mutation EditAccount($input: EditAccountInput!, $file: Upload) {
  editAccount(input: $input, file: $file) {
    ok
    error
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EditAccountGQL extends Apollo.Mutation<EditAccountMutation, EditAccountMutationVariables> {
    document = EditAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    ok
    error
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LogoutGQL extends Apollo.Mutation<LogoutMutation, LogoutMutationVariables> {
    document = LogoutDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MeDocument = gql`
    query Me {
  me {
    ok
    error
    user {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
    document = MeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateWorkDocument = gql`
    mutation CreateWork($input: CreateWorkInput!, $files: [Upload!]!) {
  createWork(input: $input, files: $files) {
    ok
    error
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateWorkGQL extends Apollo.Mutation<CreateWorkMutation, CreateWorkMutationVariables> {
    document = CreateWorkDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetWorksDocument = gql`
    query GetWorks {
  getWorks {
    ok
    error
    works {
      ...WorkFrgament
    }
  }
}
    ${WorkFrgamentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetWorksGQL extends Apollo.Query<GetWorksQuery, GetWorksQueryVariables> {
    document = GetWorksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }