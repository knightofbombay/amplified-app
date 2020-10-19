/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateAttractionInput = {
  name: string;
  description?: string | null;
  city: string;
};

export type UpdateAttractionInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  city?: string | null;
};

export type DeleteAttractionInput = {
  id: string;
};

export type TableAttractionFilterInput = {
  id?: TableIDFilterInput | null;
  name?: TableStringFilterInput | null;
  description?: TableStringFilterInput | null;
  city?: TableStringFilterInput | null;
};

export type TableIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type TableStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type CreateAttractionMutation = {
  __typename: "Attraction";
  id: string;
  name: string;
  description: string | null;
  city: string;
};

export type UpdateAttractionMutation = {
  __typename: "Attraction";
  id: string;
  name: string;
  description: string | null;
  city: string;
};

export type DeleteAttractionMutation = {
  __typename: "Attraction";
  id: string;
  name: string;
  description: string | null;
  city: string;
};

export type GetAttractionQuery = {
  __typename: "Attraction";
  id: string;
  name: string;
  description: string | null;
  city: string;
};

export type ListAttractionsQuery = {
  __typename: "AttractionConnection";
  items: Array<{
    __typename: "Attraction";
    id: string;
    name: string;
    description: string | null;
    city: string;
  } | null> | null;
  nextToken: string | null;
};

export type QueryAttractionsByIdNameIndexQuery = {
  __typename: "AttractionConnection";
  items: Array<{
    __typename: "Attraction";
    id: string;
    name: string;
    description: string | null;
    city: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateAttractionSubscription = {
  __typename: "Attraction";
  id: string;
  name: string;
  description: string | null;
  city: string;
};

export type OnUpdateAttractionSubscription = {
  __typename: "Attraction";
  id: string;
  name: string;
  description: string | null;
  city: string;
};

export type OnDeleteAttractionSubscription = {
  __typename: "Attraction";
  id: string;
  name: string;
  description: string | null;
  city: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateAttraction(
    input: CreateAttractionInput
  ): Promise<CreateAttractionMutation> {
    const statement = `mutation CreateAttraction($input: CreateAttractionInput!) {
        createAttraction(input: $input) {
          __typename
          id
          name
          description
          city
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAttractionMutation>response.data.createAttraction;
  }
  async UpdateAttraction(
    input: UpdateAttractionInput
  ): Promise<UpdateAttractionMutation> {
    const statement = `mutation UpdateAttraction($input: UpdateAttractionInput!) {
        updateAttraction(input: $input) {
          __typename
          id
          name
          description
          city
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAttractionMutation>response.data.updateAttraction;
  }
  async DeleteAttraction(
    input: DeleteAttractionInput
  ): Promise<DeleteAttractionMutation> {
    const statement = `mutation DeleteAttraction($input: DeleteAttractionInput!) {
        deleteAttraction(input: $input) {
          __typename
          id
          name
          description
          city
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAttractionMutation>response.data.deleteAttraction;
  }
  async GetAttraction(id: string): Promise<GetAttractionQuery> {
    const statement = `query GetAttraction($id: ID!) {
        getAttraction(id: $id) {
          __typename
          id
          name
          description
          city
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAttractionQuery>response.data.getAttraction;
  }
  async ListAttractions(
    filter?: TableAttractionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAttractionsQuery> {
    const statement = `query ListAttractions($filter: TableAttractionFilterInput, $limit: Int, $nextToken: String) {
        listAttractions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            city
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAttractionsQuery>response.data.listAttractions;
  }
  async QueryAttractionsByIdNameIndex(
    name: string,
    first?: number,
    after?: string
  ): Promise<QueryAttractionsByIdNameIndexQuery> {
    const statement = `query QueryAttractionsByIdNameIndex($name: String!, $first: Int, $after: String) {
        queryAttractionsByIdNameIndex(name: $name, first: $first, after: $after) {
          __typename
          items {
            __typename
            id
            name
            description
            city
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      name
    };
    if (first) {
      gqlAPIServiceArguments.first = first;
    }
    if (after) {
      gqlAPIServiceArguments.after = after;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <QueryAttractionsByIdNameIndexQuery>(
      response.data.queryAttractionsByIdNameIndex
    );
  }
  OnCreateAttractionListener: Observable<
    OnCreateAttractionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAttraction($id: ID, $name: String, $description: String, $city: String) {
        onCreateAttraction(id: $id, name: $name, description: $description, city: $city) {
          __typename
          id
          name
          description
          city
        }
      }`
    )
  ) as Observable<OnCreateAttractionSubscription>;

  OnUpdateAttractionListener: Observable<
    OnUpdateAttractionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAttraction($id: ID, $name: String, $description: String, $city: String) {
        onUpdateAttraction(id: $id, name: $name, description: $description, city: $city) {
          __typename
          id
          name
          description
          city
        }
      }`
    )
  ) as Observable<OnUpdateAttractionSubscription>;

  OnDeleteAttractionListener: Observable<
    OnDeleteAttractionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAttraction($id: ID, $name: String, $description: String, $city: String) {
        onDeleteAttraction(id: $id, name: $name, description: $description, city: $city) {
          __typename
          id
          name
          description
          city
        }
      }`
    )
  ) as Observable<OnDeleteAttractionSubscription>;
}
