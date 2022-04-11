import { FC, ReactElement } from 'react';
import useRoles from '../../hooks/useRoles';

// eslint-disable-next-line react/function-component-definition
const RoleRestrictedView: FC<{ oneOf?: string[], allOf?: string[], children: ReactElement }> = (
  { oneOf = [], allOf = [], children },
) => {
  const { isLoading, roles } = useRoles();

  if (isLoading) return null;

  if (roles == null) return null;

  const oneOfResult = oneOf.length === 0 || oneOf.some((role) => roles.includes(role));
  const allOfResult = allOf.every((role) => roles.includes(role));

  if (oneOfResult && allOfResult) return children;

  return null;
};

export default RoleRestrictedView;
