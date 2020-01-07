import React from 'react'
import { Typography } from '@material-ui/core'
import ApiRoute from './ApiRoute'
import ApiParameters from './ApiParameters'
import ApiRequestBody from './ApiRequestBody'
import ApiResponses from './ApiResponses'
import ApiRoles from './ApiRoles'
import ApiExampleModel from './ApiExampleModel'
import { ApiOperation as ApiOperationModel } from '../../../models/openapi.models'

interface ApiOperationProps {
  operation: ApiOperationModel
  example: string
}

const ApiOperation: React.FunctionComponent<ApiOperationProps> = (
  props: ApiOperationProps
) => {
  const { operation, example } = props

  return (
    <React.Fragment>
      <a id={operation.operationId} />
      <Typography variant="h3">
        {operation.summary.replace(/\./g, '')}
      </Typography>

      <Typography variant="body1">{operation.description}</Typography>

      <ApiRoute operation={operation}></ApiRoute>

      <ApiParameters parameters={operation.parameters}></ApiParameters>

      <ApiRequestBody requestBody={operation.requestBody}></ApiRequestBody>

      <ApiExampleModel example={example} />

      <ApiResponses responses={operation.responses}></ApiResponses>
      {/* <pre>{JSON.stringify(operation, null, 2)}</pre> */}
      <ApiRoles roles={operation.security[0].OAuth2}></ApiRoles>
    </React.Fragment>
  )
}

export default ApiOperation
