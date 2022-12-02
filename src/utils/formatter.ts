import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function relativeDateFormatter(date: Date) {
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true
  })
}
