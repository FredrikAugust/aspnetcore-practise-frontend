import { useNavigate } from 'react-router-dom';
import useRoles from './useRoles';

export default function useRoleGuard(
  { oneOf = [], allOf = [] }: { oneOf?: string[], allOf?: string[] },
): void {
  const { isLoading, roles } = useRoles();

  const navigate = useNavigate();

  if (isLoading) return;

  if (roles == null) return;

  const oneOfResult = oneOf.some((role) => roles.includes(role));
  const allOfResult = allOf.every((role) => roles.includes(role));

  if (oneOfResult && allOfResult) return;

  navigate('/', { replace: true });
}
