import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
}

const SvgHeartOutline = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m10.496 16.803 6.245-6.304a4.408 4.408 0 0 0-.017-6.187 4.306 4.306 0 0 0-6.135-.015l-.596.603-.605-.61a4.301 4.301 0 0 0-6.127-.016c-1.688 1.705-1.68 4.476.016 6.189l6.277 6.34c.26.263.682.263.942 0ZM11.3 5a3.306 3.306 0 0 1 4.713.016 3.408 3.408 0 0 1 .016 4.78v.002l-6.004 6.06-6.038-6.099c-1.313-1.326-1.314-3.47-.015-4.782a3.302 3.302 0 0 1 4.706.016l.96.97a.5.5 0 0 0 .711 0L11.3 5Z"
      fill="currentColor"
    />
  </svg>
)

export default SvgHeartOutline